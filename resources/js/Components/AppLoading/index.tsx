import React from 'react'

type Props = {}

const AppLoading = (props: Props) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-slate-900/0 z-50">
      <div className="w-16 h-16 rounded-full border-4 border-y-automa-green-terciary border-x-gray-50 animate-spin bg-transparent" />
    </div>
  )
}

export default AppLoading