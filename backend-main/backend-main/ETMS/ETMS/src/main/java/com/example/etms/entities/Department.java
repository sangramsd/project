package com.example.etms.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "dept")
@JsonIgnoreProperties("empList")
public class Department {
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Id
	@Column(name = "dept_id")
	private int deptId;
	@Column(name = "dept_Name")
	private String deptName;
	@Column(name = "manager_id")
	private int managerId;
	@OneToMany(mappedBy = "dept")
	private List<Employee> empList;
	public Department() {
	}
	
	public Department(int deptId, String deptName, int managerId, List<Employee> empList) {
		super();
		this.deptId = deptId;
		this.deptName = deptName;
		this.managerId = managerId;
		this.empList = empList;
	}

	public int getDeptId() {
		return deptId;
	}
	public void setDeptId(int deptId) {
		this.deptId = deptId;
	}
	public String getDeptName() {
		return deptName;
	}
	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}
	public int getManagerId() {
		return managerId;
	}
	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}
	
	public List<Employee> getEmpList() {
		return empList;
	}

	public void setEmpList(List<Employee> empList) {
		this.empList = empList;
	}

	@Override
	public String toString() {
		return "Department [deptId=" + deptId + ", deptName=" + deptName + ", managerId=" + managerId + "]";
	}
}

