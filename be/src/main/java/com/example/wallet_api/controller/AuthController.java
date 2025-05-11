// src/main/java/com/example/wallet_api/controller/AuthController.java
package com.example.wallet_api.controller;

import com.example.wallet_api.model.User;
import com.example.wallet_api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final UserRepository userRepository;

    @Autowired
    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Регистрирует нового пользователя.
     * Тело запроса — JSON вида:
     * {
     *   "email": "test@user.com",
     *   "password": "password123"
     * }
     */
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userRepository.save(user);
    }

    /**
     * Простая проверка логина.
     * Тело запроса — JSON того же формата.
     * В ответ возвращает строку "Login successful" или бросает RuntimeException.
     */
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User existing = userRepository.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        if (!existing.getPassword().equals(user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }
        return "Login successful";
    }
}
