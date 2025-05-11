package com.example.wallet_api.repository;
import com.example.wallet_api.model.Category;
import com.example.wallet_api.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface CategoryRepository extends JpaRepository<Category,Long> {
    List<Category> findByUser(User user);
}
