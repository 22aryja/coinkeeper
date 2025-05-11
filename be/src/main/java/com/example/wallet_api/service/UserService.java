// src/main/java/com/example/wallet_api/service/UserService.java
package com.example.wallet_api.service;

import com.example.wallet_api.model.User;
import com.example.wallet_api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository repo;

    @Autowired
    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    /**
     * Регистрирует пользователя с чистым паролем (без хеширования).
     */
    public User register(String email, String password) {
        User u = new User();
        u.setEmail(email);
        u.setPassword(password);
        return repo.save(u);
    }

    /**
     * Находит пользователя по email или кидает RuntimeException, если не найден.
     */
    public User findByEmail(String email) {
        return repo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}
