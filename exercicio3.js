const toastTrigger = document.getElementById('saveButton')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

const toastTrigger2 = document.getElementById('cancelButton')
const toastLiveExample2 = document.getElementById('liveToastCancel')
if (toastTrigger2) {
  toastTrigger2.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample2)

    toast.show()
  })
}