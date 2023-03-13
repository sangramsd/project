package com.example.etms.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.etms.daos.ProjectDao;
import com.example.etms.entities.Project;


@Transactional
@Service
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	public ProjectDao projectDao;

	
	@Override
	public Project save(Project pro) {
		return projectDao.save(pro) ;
	}

	@Override
	public Project update(Project pro) {
		Project project = findById(pro.getpId());
		project.setpName(pro.getpName());
		project.setpDesc(pro.getpDesc());
		project.setpStartDate(pro.getpStartDate());
		project.setpEndDate(pro.getpEndDate());
		project.setpSubmittedDate(pro.getpSubmittedDate());
		project.setpProgress(pro.getpProgress());
		project.setpReport(pro.getpReport());
		project.setpStatus(pro.getpStatus());
		return projectDao.save(pro) ;
	}

	@Override
	public boolean delete(int id) {
		 try {
			 projectDao.deleteById(id);
				return true;
			} catch (Exception e) {
				e.printStackTrace();
				return false;
			}
	}

	@Override
	public List<Project> findAll() {
		return projectDao.findAll() ;
	}

	@Override
	public Project findById(int id) {
		Optional<Project> project = projectDao.findById(id);
		return project.orElse(null);
	}
	@Override
	public List<Project>  findByStatus(String status) {
		return projectDao.findByStatus(status);
	}
	@Override
	public int  countByStatus(String status) {
		return projectDao.countByStatus(status);
	}
	@Override
	public long countall() {
		return projectDao.count();
	}

}
