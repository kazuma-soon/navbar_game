class PlaysController < ApplicationController
  def top ;end
  
  def plays_1 ;end

  def plays_2 ;end

  def plays_3 ;end

  def plays_4 ;end

  def plays_5 ;end

  def win
    redirect_to root_path, success: '最強だ！ あなたはどんな速いサイトにも対応できるでしょう。'
  end

  def lose
    redirect_to root_path, danger: 'そのボタン押したらダメですやーん。'
  end
end
