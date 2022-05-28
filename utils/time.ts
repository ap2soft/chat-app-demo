// prettier-ignore
export const getTime = (): string =>
    new Date().toLocaleTimeString(
        'en-US',
        { hour: 'numeric', minute: '2-digit' }
    )
