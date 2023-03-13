package com.example.etms.service;

import java.util.List;

import com.example.etms.entities.Department;

public interface DepartmentService {
		  List<Department> findAll ();
		  Department findById(int id);
}
