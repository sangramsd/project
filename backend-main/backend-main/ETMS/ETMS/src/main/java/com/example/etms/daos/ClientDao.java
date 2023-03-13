package com.example.etms.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.etms.entities.Client;

public interface ClientDao extends JpaRepository<Client, Integer>{

}
