module ApplicationHelper
  def default_meta_tags
    {
      site: 'Navbar絶対押させない',
      title: '',
      reverse: true,
      separator: '|',
      description: 'ボタンを押せたらあなたの勝ちです',
      keywords: '',
      canonical: request.original_url,
      noindex: ! Rails.env.production?,
      icon: [
        { href: image_url('favicon.ico') },
        { href: image_url('icon.png'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
      ],
      og: {
        site_name: 'Navbar絶対押させない',
        title: 'Navbar絶対押させない',
        description: 'ボタンを押せたらあなたの勝ちです', 
        type: 'website',
        url: request.original_url,
        image: image_url('icon.png'),
        locale: 'ja_JP',
      },
      twitter: {
        card: '',
        site: '',
      },
      fb: {
        app_id: ''
      }
    }
  end
end
