import Bar from '../bar/bar';
import './login.css';
import RegisterForm from './RegisterForm';

export default function Register(props) {
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
                    <p>REGISTER</p>
                    <RegisterForm></RegisterForm>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}  