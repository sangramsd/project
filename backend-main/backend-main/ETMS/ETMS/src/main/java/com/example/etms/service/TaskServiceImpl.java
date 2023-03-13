package com.example.etms.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.etms.daos.TaskDao;
import com.example.etms.entities.Task;

@Transactional
@Service
public class TaskServiceImpl implements TaskService {
	@Autowired
	public TaskDao taskDao;

	@Override
	public Task save(Task task) {
		return taskDao.save(task);
	}

	@Override
	public Task update(Task t) {
		Task task = findById(t.gettId());
		task.setTReport(t.getTReport());
		task.settSubmittedDate(t.gettSubmittedDate());
		task.settStatus(t.gettStatus());
		task.settSubmissionStatus(t.gettSubmissionStatus());
		return  taskDao.save(task);
	}

	@Override
	public boolean delete(int task) {
		 try {
			 taskDao.deleteById(task);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public List<Task> findAll() {
		return taskDao.findAll();
	}
	
	@Override
	public Task findById(int id) {
		Optional<Task> task = taskDao.findById(id);
		return task.orElse(null);
	}
	
	@Override
	public List<Task>  findByProject(int project) {
		List<Task> proj = taskDao.findByProject(project);
		return proj;
	}
	
	@Override
	public List<Task> findByEmpAndApprovalStatus(int empId,String approvalStatus) {
		return taskDao.findByEmpAndApprovalStatus( empId, approvalStatus);
	}

	@Override
	public Task updateStatus(Task t) {
		Task task = findById(t.gettId());
		task.setApprovalStatus(t.getApprovalStatus());
		task.settStatus(t.gettStatus() );
		task.settAcceptDate(t.gettAcceptDate());
		return taskDao.save(task);
	}
	
	@Override
	public List<Task> findByApprovalStatus(String approvalStatus) {
		return taskDao.findByApprovalStatus(approvalStatus);
	}
	@Override
	public int countByApprovalStatus(String approvalStatus) {
		return taskDao.countByApprovalStatus(approvalStatus);
	}
	@Override
	public long countall() {
		return taskDao.count();
	}
	
	@Override
	public Task editTask (Task t) {
//		Task task = taskDao.getById(t.gettId());
		Task task = findById(t.gettId());
		task.settName(t.gettName());
		task.setEmp(t.getEmp());
		task.setApprovalStatus(t.getApprovalStatus());
		task.settAssignDate(t.gettAssignDate());
		task.settEndDate(t.gettEndDate());
		task.settDesc(t.gettDesc());
		task.setRemark(t.getRemark());
		return  taskDao.save(task);
	}
}
