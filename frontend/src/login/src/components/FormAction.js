export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-Green hover:bg-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-Green-500 mt-5"
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            :
            <></>
        }
        </>
    )
}