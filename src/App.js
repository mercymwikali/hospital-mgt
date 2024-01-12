import logo from './logo.svg';
import './App.css';
import AppRoutes from './Routes';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#002329',
          colorBorder:'#62c1db',
          colorPrimaryBg	:'#002329',
          colorText:'#000',
          colorIcon:'#FAFAFA'
        },
        components: {
          Menu: {
            itemSelectedBg: '#5DBF9D',
            itemColor: '#000',
            itemSelectedColor:'#000',
            itemHoverBg:'rgba(93,191,157, 0.6)',
            itemHoverColor:'#000',
          },
          Input:{
            hoverBorderColor:'#62c1db', 
            activeBorderColor:'#67336d',
            // activeShadow:'rgb(0, 0, 0)'
          },
          Table:{
            headerBg	:'#007580',
            headerColor:'#002329',
            itemColor:"#fff",
            headerSortActiveBg:'#002329',
       
          },
          Dropdown:{
            itemColor:'#000'
          },
          Tabs:{
            colorTextDescription:'#000'

          },
          Select:{
            // colorText: '#FAFAFA',
            optionSelectedColor: '#FAFAFA',
          }
        }
      }}>

      <AppRoutes />
    </ConfigProvider>

  );
}

export default App;
