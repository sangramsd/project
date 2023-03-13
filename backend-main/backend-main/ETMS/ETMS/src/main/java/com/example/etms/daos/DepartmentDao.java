package com.example.etms.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.etms.entities.Department;

public interface DepartmentDao extends JpaRepository<Department,  Integer>{
	
}
