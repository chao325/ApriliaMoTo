import { useLocation,useNavigate  } from 'react-router-dom'
const Homes = () => {
  // 使用 hook
  const location = useLocation();

  const navigate = useNavigate();
  return (
    <div>

      <div onClick={() => navigate('./about')}>跳转到/b</div>
      <div onClick={() => navigate('../about/index.jsx')}>跳转到/a/a1/a11</div>
      <div onClick={() => navigate(-1)}>跳转到/a</div>
    </div>

  )
}

export default Homes