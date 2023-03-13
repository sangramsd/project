package com.example.etms.models;


public class Count {
	long allProject;
	int ongonigProject;
	long allTask;
	int acceptedTask;
	int rejectedTask;
	int waitingTask;
	
	public Count() {
	}
	
	public Count(long allProject, int ongonigProject, long allTask, int acceptedTask, int rejectedTask, int waitingTask) {
		this.allProject = allProject;
		this.ongonigProject = ongonigProject;
		this.allTask = allTask;
		this.acceptedTask = acceptedTask;
		this.rejectedTask = rejectedTask;
		this.waitingTask = waitingTask;
	}

	public long getAllProject() {
		return allProject;
	}

	public void setAllProject(long allProject) {
		this.allProject = allProject;
	}

	public long getAllTask() {
		return allTask;
	}

	public void setAllTask(long allTask) {
		this.allTask = allTask;
	}

	public int getOngonigProject() {
		return ongonigProject;
	}

	public void setOngonigProject(int ongonigProjcet) {
		this.ongonigProject = ongonigProjcet;
	}
	
	public int getAcceptedTask() {
		return acceptedTask;
	}

	public void setAcceptedTask(int acceptedTask) {
		this.acceptedTask = acceptedTask;
	}

	public int getRejectedTask() {
		return rejectedTask;
	}

	public void setRejectedTask(int rejectedTask) {
		this.rejectedTask = rejectedTask;
	}

	public int getWaitingTask() {
		return waitingTask;
	}

	public void setWaitingTask(int waitingTask) {
		this.waitingTask = waitingTask;
	}



	@Override
	public String toString() {
		return "Count [allProject=" + allProject + ", ongonigProject=" + ongonigProject + ", allTask=" + allTask
				+ ", acceptedTask=" + acceptedTask + ", rejectedTask=" + rejectedTask + ", waitingTask=" + waitingTask
				+ "]";
	}

	
	
	
	
	
}
