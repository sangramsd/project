package com.example.etms.service;

import java.util.List;

import com.example.etms.entities.Project;
import com.example.etms.entities.Task;

public interface TaskService {
	Task save(Task task);
	Task update(Task task);
	boolean delete (int id);
	 List<Task> findAll ();
	 Task findById(int id);
	List<Task> findByEmpAndApprovalStatus(int empId, String approvalStatus);
	List<Task> findByApprovalStatus(String status);
	Task updateStatus(Task task);
	List<Task> findByProject(int project);
	Task editTask(Task t);
	int countByApprovalStatus(String approvalStatus);
	long countall();
}
