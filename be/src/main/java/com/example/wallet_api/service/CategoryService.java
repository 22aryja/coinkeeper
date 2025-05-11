package com.example.wallet_api.service;

import com.example.wallet_api.model.*;
import com.example.wallet_api.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository catRepo;
    private final UserRepository userRepo;

    @Autowired
    public CategoryService(CategoryRepository catRepo, UserRepository userRepo) {
        this.catRepo = catRepo;
        this.userRepo = userRepo;
    }

    public Category create(Long uid, String name, String icon, String color) {
        User u = userRepo.findById(uid).orElseThrow();
        Category c = new Category();
        c.setUser(u);
        c.setName(name);
        c.setIcon(icon);
        c.setColor(color);
        return catRepo.save(c);
    }

    public List<Category> list(Long uid) {
        User u = userRepo.findById(uid).orElseThrow();
        return catRepo.findByUser(u);
    }

    public void delete(Long uid, Long id) {
        catRepo.deleteById(id);
    }
}
