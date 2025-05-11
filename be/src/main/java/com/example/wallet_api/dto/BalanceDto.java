package com.example.wallet_api.dto;

public class BalanceDto {
    private Double balance;

    public BalanceDto() {}

    public BalanceDto(Double balance) {
        this.balance = balance;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }
}