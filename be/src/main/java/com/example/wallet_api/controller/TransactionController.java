package com.example.wallet_api.controller;

import com.example.wallet_api.dto.TransactionDto;
import com.example.wallet_api.model.Transaction;
import com.example.wallet_api.service.TransactionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin
public class TransactionController {

    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping
    public List<TransactionDto> getAll() {
        Long uid = 1L;
        return transactionService.list(uid)
                .stream()
                .map(t -> {
                    TransactionDto d = new TransactionDto();
                    d.setId(t.getId());
                    d.setType(t.getType());
                    d.setAmount(t.getAmount());
                    d.setDate(t.getDate());
                    d.setComment(t.getComment());
                    d.setCategoryId(t.getCategory().getId());
                    return d;
                })
                .collect(Collectors.toList());
    }

    @PostMapping
    public TransactionDto create(@RequestBody TransactionDto dto) {
        Long uid = 1L;
        Transaction txn = new Transaction();
        txn.setType(dto.getType());
        txn.setAmount(dto.getAmount());
        txn.setDate(dto.getDate());
        txn.setComment(dto.getComment());
        Transaction saved = transactionService.create(uid, txn, dto.getCategoryId());
        dto.setId(saved.getId());
        return dto;
    }

    @PutMapping("/{id}")
    public TransactionDto update(@PathVariable Long id, @RequestBody TransactionDto dto) {
        Long uid = 1L;
        Transaction txn = new Transaction();
        txn.setType(dto.getType());
        txn.setAmount(dto.getAmount());
        txn.setDate(dto.getDate());
        txn.setComment(dto.getComment());
        transactionService.update(uid, id, txn);
        dto.setId(id);
        return dto;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        Long uid = 1L;
        transactionService.delete(uid, id);
    }

    @GetMapping("/balance")
    public com.example.wallet_api.dto.BalanceDto getBalance() {
        Long uid = 1L;
        double bal = transactionService.balance(uid);
        return new com.example.wallet_api.dto.BalanceDto(bal);
    }
}
