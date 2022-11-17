import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import './style.less'

const about = () => {
  // 使用 hook
  const location = useLocation();
  const { from, pathname } = location

  return (
    <div>
      <span>当前的{from},{pathname}</span>
    </div>

  )
}

export default about