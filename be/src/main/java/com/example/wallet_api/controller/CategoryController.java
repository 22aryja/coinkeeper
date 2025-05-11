package com.example.wallet_api.controller;

import com.example.wallet_api.dto.CategoryDto;
import com.example.wallet_api.model.Category;
import com.example.wallet_api.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public List<CategoryDto> getAll() {
        Long uid = 1L;
        return categoryService.list(uid)
                .stream()
                .map(c -> {
                    CategoryDto d = new CategoryDto();
                    d.setId(c.getId());
                    d.setName(c.getName());
                    d.setIcon(c.getIcon());
                    d.setColor(c.getColor());
                    return d;
                })
                .collect(Collectors.toList());
    }

    @PostMapping
    public CategoryDto create(@RequestBody CategoryDto dto) {
        Long uid = 1L;
        Category c = categoryService.create(uid, dto.getName(), dto.getIcon(), dto.getColor());
        dto.setId(c.getId());
        return dto;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        Long uid = 1L;
        categoryService.delete(uid, id);
    }
}
