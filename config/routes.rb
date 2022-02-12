Rails.application.routes.draw do
  root to: 'plays#top'
  
  get '/plays/1', to: 'plays#plays_1'
  get '/plays/2', to: 'plays#plays_2'
  get '/plays/3', to: 'plays#plays_3'
  get '/plays/4', to: 'plays#plays_4'
  get '/plays/5', to: 'plays#plays_5'
  get '/plays/win', to: 'plays#win'
  get '/plays/lose', to: 'plays#lose'
  get '/plays/timeout', to: 'plays#timeout'
end
