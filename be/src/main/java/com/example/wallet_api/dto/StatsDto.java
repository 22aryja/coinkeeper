package com.example.wallet_api.dto;

public class StatsDto {
    private String category;
    private Double total;

    public StatsDto() {}

    public StatsDto(String category, Double total) {
        this.category = category;
        this.total = total;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }
}