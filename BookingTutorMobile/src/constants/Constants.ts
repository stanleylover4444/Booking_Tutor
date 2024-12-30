export const STATUS = {
    //Booking
    booking_scheduled: 'scheduled',
    booking_confirmed: 'confirmed',
    booking_in_progress: 'in-progress',
    booking_cancelled: 'cancelled',
    booking_completed: 'completed',
}

export const USER_TYPE = {
    lawyer: 'lawyer',
    customer: 'customer',
}

export const SELECTION = [
    { key: 'edit', name: 'Cập nhật' },
    { key: 'delete', name: 'Xóa' },
]

export const getStatusKey = (status: string | number) => {
    // @ts-ignore
    return Object.keys(STATUS)?.find((key: any) => STATUS[key] === status) || ''
}
