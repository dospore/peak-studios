type Props = {
  scrollToServices: () => void
}

function Title ({
  scrollToServices
}: Props) {
  return (
    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
      <h1 className="h1 mb-4 font-bacasime-antique text-slate-800 font-normal" data-aos="fade-up">Peak Studios</h1>
      <p className="text-xl text-gray-400 mb-8 font-bacasime-antique tracking-wide text-slate-600" data-aos="fade-up" data-aos-delay="200">
        Capturing stunning perspectives with breathtaking aerial cinematography and photography, delivering captivating shots from new viewpoints.
      </p>
      <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
        <div data-aos="fade-up" data-aos-delay="600">
          <button className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" onClick={scrollToServices}>Our Services</button>
        </div>
      </div>
    </div>
  )
}

export default Title;
