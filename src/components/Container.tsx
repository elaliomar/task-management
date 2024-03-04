
const Container = ({children,} : {children : JSX.Element | JSX.Element[];}) => {
  return (
    <div className="col col-12 col-md-10  bg-secondary d-flex justify-content-center">
         <div className='container'>{children}</div>
        </div>
  )
}

export default Container