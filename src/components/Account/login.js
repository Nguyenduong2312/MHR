import Bar from '../bar/bar';
import './login.css';
import LoginForm from './LoginForm';

export default function Login(props) {
  return (
    <div>
        <Bar></Bar>
        <div class="login_layout">
            <div class="login_img">
                <img src="image/img_login.png" alt=""/>
            </div>
            <div class="login_tag_cover">
                <div class="login_tag">
                    <div className='login_tag_text'>
                        <p>LOGIN</p>
                        <LoginForm></LoginForm>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}  