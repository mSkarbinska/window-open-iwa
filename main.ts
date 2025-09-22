import { SsoOffloadingConnector, createSsoOffloadingConnector } from "sso-offloading-connector";

const ssoCf = document.getElementById('ssoCf') as HTMLIFrameElement;
let ssoConnector: SsoOffloadingConnector | null = null;


document.getElementById('sso-start')?.addEventListener('click', (event) => {
  if(ssoConnector){
    ssoConnector.start().catch(e=>console.log(e))
    return
  } 
  ssoConnector = createSsoOffloadingConnector(
    ssoCf as any,
    {
      urls: ["https://accounts.google.com/o/oauth2/v2*"],
    },
    (e)=>{console.log(e)}
  );
    ssoConnector.start().catch(e=>console.log(e))
});

document.getElementById('sso-stop')?.addEventListener('click', (event) => {
   ssoConnector?.stop()
});

document.getElementById('open-blank')?.addEventListener('click', () => {
  window.open('https://example.com', '_blank');
});
document.getElementById('open-blank-5x')?.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    window.open('https://example.com', '_blank');
  }
});

document.getElementById('open-self')?.addEventListener('click', () => {
  window.open('https://example.com', '_self');
});
document.getElementById('open-self-5x')?.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    window.open('https://example.com', '_self');
  }
});

document.getElementById('open-basic')?.addEventListener('click', () => {
  window.open('https://example.com');
});
document.getElementById('open-basic-5x')?.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    window.open('https://example.com');
  }
});

document
  .getElementById('open-blank-noopener')
  ?.addEventListener('click', () => {
    window.open('https://example.com', '_blank', 'noopener');
  });
document
  .getElementById('open-blank-noopener-5x')
  ?.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
      window.open('https://example.com', '_blank', 'noopener');
    }
  });

document
  .getElementById('open-blank-noreferrer')
  ?.addEventListener('click', () => {
    window.open('https://example.com', '_blank', 'noreferrer');
  });
document
  .getElementById('open-blank-noreferrer-5x')
  ?.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
      window.open('https://example.com', '_blank', 'noreferrer');
    }
  });

document.getElementById('open-named')?.addEventListener('click', () => {
  window.open('https://example.com', 'myWindow');
});
document.getElementById('open-named-5x')?.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    window.open('https://example.com', 'myWindow');
  }
});

document.getElementById('open-features')?.addEventListener('click', () => {
  window.open('https://example.com', '_blank', 'width=400,height=400');
});
document.getElementById('open-features-5x')?.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    window.open('https://example.com', '_blank', 'width=400,height=400');
  }
});

document
  .getElementById('focus-main-window-after-3s')
  ?.addEventListener('click', () => {
    console.log('Will request focus for this window in 3 seconds...');
    setTimeout(() => {
      window.focus();
      console.log('Focus requested for this window.');
    }, 3000);
  });
