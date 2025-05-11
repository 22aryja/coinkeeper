package com.example.wallet_api.service;

import com.example.wallet_api.dto.StatsDto;
import com.example.wallet_api.repository.TransactionRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class StatsService {
    private final TransactionRepository txnRepo;
    private final EntityManager em;

    @Autowired
    public StatsService(TransactionRepository txnRepo, EntityManager em) {
        this.txnRepo = txnRepo;
        this.em = em;
    }

    public List<StatsDto> byCategory(Long uid, LocalDate start, LocalDate end) {
        String jpql =
                "select new com.example.wallet_api.dto.StatsDto(c.name, sum(t.amount)) " +
                        "from Transaction t join t.category c " +
                        "where t.user.id = :uid and t.date between :st and :en " +
                        "group by c.name";
        TypedQuery<StatsDto> q = em.createQuery(jpql, StatsDto.class);
        q.setParameter("uid", uid);
        q.setParameter("st", start);
        q.setParameter("en", end);
        return q.getResultList();
    }
}
