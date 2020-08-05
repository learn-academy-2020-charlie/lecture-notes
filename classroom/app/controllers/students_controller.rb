class StudentsController < ApplicationController
  def index
    # no view means we don't need an instance variable here necessarily
    students = Student.all
    # since we don't have an index view for rails magic to navigate to, we need to pass the student hash as JSON to the api
    render json: students
  end

  def show
    # singular variable here to represent a single student we are returning
    student = Student.find(params[:id])
    # same as index method, render json
    render json: student
  end

  def create
    # create method requires strong params which will be defined below
    student = Student.create(student_params)
    # if the student is successfully created
    if student.valid?
      # render that student
      render json: student
    # otherwise
    else
      # render errors
      render json: student.errors
    end
  end

  def destroy
    # singular variable here to represent a single student we are deleting
    student = Student.find(params[:id])
    if student.destroy
      render json: student
    else
      render json: student.errors
    end
  end

  def update
    # singular variable here to represent a single student we are updating
    student = Student.find(params[:id])
    student.update(student_params)
    if student.valid?
      render json: student
    else
      render json: student.errors
    end
  end

  # strong params should be kept private. anything below this line is only avaiable to be called inside this class itself
  private
  def student_params
    params.require(:student).permit(:name, :cohort)
  end
end
