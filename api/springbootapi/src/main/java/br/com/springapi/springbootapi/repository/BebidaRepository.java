package br.com.springapi.springbootapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.springapi.springbootapi.entity.Bebida;

@Repository
public interface BebidaRepository extends JpaRepository<Bebida, Long> { }
