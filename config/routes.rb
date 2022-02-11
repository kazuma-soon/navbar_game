Rails.application.routes.draw do
  root 'plays#plays_1'

  get '/plays/2', to: 'plays#plays_2'
  get '/plays/3', to: 'plays#plays_3'
end
