'use client';

import { useState, useEffect } from 'react';
import { Hand } from 'lucide-react';

type WelcomeHeaderProps = {
  name: string;
};

export default function WelcomeHeader({ name }: WelcomeHeaderProps) {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  if (!greeting) {
    return (
        <div className="flex items-center gap-2">
            <h1 className="font-headline text-3xl font-bold tracking-tighter">
                Welcome, {name.split(' ')[0]}!
            </h1>
        </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <h1 className="font-headline text-3xl font-bold tracking-tighter">
        {greeting}, {name.split(' ')[0]}!
      </h1>
      <Hand className="h-8 w-8 text-yellow-400" />
    </div>
  );
}
