package com.keiken.localExplorer.repository;

import com.keiken.localExplorer.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
