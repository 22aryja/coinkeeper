package com.example.wallet_api.controller;

import com.example.wallet_api.dto.StatsDto;
import com.example.wallet_api.service.StatsService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/stats")
@CrossOrigin
public class StatsController {

    private final StatsService statsService;

    public StatsController(StatsService statsService) {
        this.statsService = statsService;
    }

    @GetMapping
    public List<StatsDto> getStats(
            @RequestParam String start,
            @RequestParam String end
    ) {
        Long uid = 1L;
        LocalDate s = LocalDate.parse(start);
        LocalDate e = LocalDate.parse(end);
        return statsService.byCategory(uid, s, e);
    }
}
