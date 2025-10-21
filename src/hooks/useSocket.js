import { useEffect, useRef } from "react";
import { io } from 'socket.io-client';
import DOMAIN from '../api/utils/Domain';

const useSocket = () => {
    
  const socketRef = useRef(null);
  const flag = useRef(true);
  useEffect(() => {
    if (!socketRef.current && flag.current) {
      const email = localStorage.getItem('userEmail');
      socketRef.current = io(DOMAIN.BackEnd, {
        transports: ['websocket'],
      });

      socketRef.current.on('connect', () => {
        console.log('Connected:', socketRef.current.id);
        socketRef.current.emit('user-online', { email });
      });

      socketRef.current.on('message', (data) => {
        console.log('Received from backend:', data);
      });

      socketRef.current.on('userLogId', (data) => {
        sessionStorage.setItem('userLogId', data.userLogId);
        console.log('User log id:', data.userLogId);
      });

      flag.current = false;
    }

    // Optional: only disconnect on full page unload
    return () => {
      window.addEventListener('beforeunload', () => {
        if (socketRef.current) {
          socketRef.current.disconnect();
        }
      });
    };

  }, []);

};

export default useSocket;