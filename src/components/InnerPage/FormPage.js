// FormPage.js

import React, { useState } from 'react';
import './FormPage.css';
import CustButton from '../Button/CustButton';


function FormPage() {
  const [sign, setSign] = useState(true);
  const [option, setOption] = useState("請選擇");

  return (
    <div className='form-container'>
      <div className='top'>
        <div className='leave-top'>檢視 / 新增請假單</div>
      </div>
      <div className='my-container'>
        <div className='self_name'>姓名：<input type="text"></input></div>
        <div className='boss_name'>部門主管：<input type="text"></input></div>

        <div className="dropdown">假別：
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            { option }
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" onClick={()=>{ setOption("事假") }}>事假</a></li>
            <li><a class="dropdown-item" href="#" onClick={()=>{ setOption("病假") }}>病假</a></li>
            <li><a class="dropdown-item" href="#" onClick={()=>{ setOption("特休假") }}>特休假</a></li>
            <li><a class="dropdown-item" href="#" onClick={()=>{ setOption("生理假") }}>生理假</a></li>
          </ul>
        </div>

        <div className="date-group">請假時間：自
          <input type="datetime-local"></input>
        </div>

        <div className="date-group">請假時間：至
          <input type="datetime-local"></input>
        </div>
        
        <div className="invoice">請假證明單據：
          <input type="file"></input>
        </div>

        <div className="sign">部門主管簽核：
          <input 
            className="sign-check" 
            type="checkbox"
            onChange={()=>{setSign(!sign)}}
          ></input>未簽核
        </div> 
        <div className="memo">送出申請單後, 系統將寄通知信給部門主管簽核, 待簽核完成, 即完成請假程序。</div>

      </div>
      <CustButton 
        label={"確定送出"} 
        disable={sign}
      ></CustButton>

     
    </div>
  );
}

export default FormPage;
