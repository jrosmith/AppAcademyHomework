class BooksController < ApplicationController
  def index
    render json: Book.all
  end

  def new
    Book.new(book_params)
  end

  def create
    Book.create!(book_params)
  end

  def destroy
    book = Book.find_by(id: params[:id])
    render json: book if book.destroy
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
