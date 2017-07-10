import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

// export const Header = () => (
//   <div>
//     <h1>React Starter Kit</h1>
//     <h2><a href='https://bodyno.com' target='_blank'>bodyno</a></h2>
//     <IndexLink to='/' activeClassName='route--active'>
//       Home
//     </IndexLink>
//     {' · '}
//     <Link to='/counter' activeClassName='route--active'>
//       Counter
//     </Link>
//     {' · '}
//     <Link to='/zen' activeClassName='route--active'>
//       Zen
//     </Link>
//     {' · '}
//     <Link to='/elapse' activeClassName='route--active'>
//       Elapse
//     </Link>
//     {' · '}
//     <Link to='/route/88' activeClassName='route--active'>
//       Route
//     </Link>
//     {' · '}
//     <Link to='/notFound' activeClassName='route--active'>
//       404
//     </Link>
//   </div>
// )
const movieTextColor = { color: 'rgb(35, 132, 232)' }
const bookTextColor = { color: 'rgb(159, 120, 96)' }
const tvTextColor = { color: 'rgb(228, 168, 19)' }
const musicTextColor = { color: 'rgb(42, 184, 204)' }

export const Header = () => (
  <div>
    <div className='header-container'>
      <h1 className='title'>豆瓣</h1>
      <div className='tab-container'>
        <span><Link to='/elapse' style={movieTextColor}>电影</Link></span>
        <span><Link to='/zen' style={bookTextColor}>图书</Link></span>
        <span><Link to='/counter' style={tvTextColor}>电视剧</Link></span>
        <span><Link to='/notFound' style={musicTextColor}>音乐</Link></span>
      </div>
    </div>
  </div>
)

export default Header
