export const metadata = {
  title: 'Peak Studios',
  description: 'Custom FPV videography',
}

import Desktop from '../../pages/Home/desktop';
import Mobile from '../../pages/Home/mobile';

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <Desktop />
      </div>
      <div className="block md:hidden">
        <Mobile />
      </div>
    </>
  )
}
