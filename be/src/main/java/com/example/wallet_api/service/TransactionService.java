package com.example.wallet_api.service;

import com.example.wallet_api.model.*;
import com.example.wallet_api.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {
    private final TransactionRepository txnRepo;
    private final UserRepository userRepo;
    private final CategoryRepository catRepo;

    @Autowired
    public TransactionService(
            TransactionRepository txnRepo,
            UserRepository userRepo,
            CategoryRepository catRepo
    ) {
        this.txnRepo = txnRepo;
        this.userRepo = userRepo;
        this.catRepo = catRepo;
    }

    public Transaction create(Long uid, Transaction t, Long catId) {
        User u = userRepo.findById(uid).orElseThrow();
        Category c = catRepo.findById(catId).orElseThrow();
        t.setUser(u);
        t.setCategory(c);
        return txnRepo.save(t);
    }

    public List<Transaction> list(Long uid) {
        User u = userRepo.findById(uid).orElseThrow();
        return txnRepo.findByUser(u);
    }

    public Transaction update(Long uid, Long id, Transaction data) {
        Transaction ex = txnRepo.findById(id).orElseThrow();
        ex.setType(data.getType());
        ex.setAmount(data.getAmount());
        ex.setDate(data.getDate());
        ex.setComment(data.getComment());
        if (data.getCategory()!=null) ex.setCategory(data.getCategory());
        return txnRepo.save(ex);
    }

    public void delete(Long uid, Long id) {
        txnRepo.deleteById(id);
    }

    public Double balance(Long uid) {
        return list(uid).stream()
                .mapToDouble(t -> t.getType()==TransactionType.INCOME
                        ? t.getAmount()
                        : -t.getAmount())
                .sum();
    }
}
