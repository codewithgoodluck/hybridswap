import "../Data/Data.scss";
const SettingsData = () => (
         
         <div className="iconDataSetting">
         <h6>TRANSACTION SETTINGS</h6>  
                <span>Slippage tolerance</span>
                 <div className="parentSettingIcon">
                     <button>0.1%</button>
                     <button>0.5%</button>
                     <button>1.3%</button>
                     <button>0.5%</button>
                     <button>1.3%</button>
                     <button>0.5%</button>
                 </div>
                   <p> Your transaction will revert if the price changes unfavorably more than this percentage.</p>
                 </div>
  
  )

  export default SettingsData;


  

  