Rails.application.routes.draw do
  get 'model_book/new' => 'model_book#new'
  post 'model_book' => 'model_book#create'
end
