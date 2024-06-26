package com.keiken.localExplorer.repository;

import com.keiken.localExplorer.entity.Proposition;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PropositionRepository extends JpaRepository<Proposition,Integer> {
}
