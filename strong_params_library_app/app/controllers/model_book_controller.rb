class ModelBookController < ApplicationController
  def new
  end

  def create
    #add book params as the argument of .create
    @book = Book.create(book_params)
    if @book.valid?
      render 'index.html.erb'
    end
  end

  # Private methods can only be used within the class definition ; they're for internal usage.
  private
  # Provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.
  def book_params
    # params.require + ( symbol of model ).permit( :column1, :column2)
    params.require(:book).permit(:title, :author, :check_out_date)
  end
end
