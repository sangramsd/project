package com.example.etms.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "employee")
@JsonIgnoreProperties({"empTaskList"})
public class Employee {
	@Id
	@Column(name = "emp_id")
	private int empId;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String designation;
	@Column(name = "manager_id")
	private int managerId;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "joinDate", updatable = false)
	private Date joinDate;
	private Double salary;
	private String gender;
	private String contact;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "birthDate")
	private Date birthDate;
	private String address;
	private String profilePicture;
	private String securityQuestion;
	@ManyToOne
	@JoinColumn(name =  "dept_id")
	private Department dept ;
	@OneToMany(mappedBy = "emp")
	private List<Task> empTaskList;
	
	public Employee() {
	}
	public Employee(int empId, String firstName, String lastName, String email, String password, String designation,
			int managerId, Date joinDate, Double salary, String gender, String contact, Date birthDate,
			String address, String profilePicture, String securityQuestion, Department dept, List<Task> empTaskList) {
		super();
		this.empId = empId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.designation = designation;
		this.managerId = managerId;
		this.joinDate = joinDate;
		this.salary = salary;
		this.gender = gender;
		this.contact = contact;
		this.birthDate = birthDate;
		this.address = address;
		this.profilePicture = profilePicture;
		this.securityQuestion = securityQuestion;
		this.dept = dept;
		this.empTaskList = empTaskList;
	}

	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public int getManagerId() {
		return managerId;
	}
	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}
	
	public Date getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}
	public Double getSalary() {
		return salary;
	}
	public void setSalary(Double salary) {
		this.salary = salary;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public Date getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getProfilePicture() {
		return profilePicture;
	}
	public void setProfilePicture(String profilePicture) {
		this.profilePicture = profilePicture;
	}
	public String getSecurityQuestion() {
		return securityQuestion;
	}
	public void setSecurityQuestion(String securityQuestion) {
		this.securityQuestion = securityQuestion;
	}
	
	public Department getDept() {
		return dept;
	}

	public void setDept(Department dept) {
		this.dept = dept;
	}

	public List<Task> getEmpTaskList() {
		return empTaskList;
	}

	public void setEmpTaskList(List<Task> empTaskList) {
		this.empTaskList = empTaskList;
	}

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", designation=" + designation + ", managerId=" + managerId + ", joinDate=" + joinDate + ", salary=" + salary + ", gender=" + gender + ", contact="
				+ contact + ", birthDate=" + birthDate + ", address=" + address + ", profilePicture=" + profilePicture
				+ ", securityQuestion=" + securityQuestion + ", dept=" + dept + "]";
	}
}
