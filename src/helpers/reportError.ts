export const reportError = (error: Error, extra?: Record<string, unknown>) => {
  const { Sentry } = window;
  if (!Sentry) {
    console.log(extra);
    throw error;
  }

  Sentry.withScope((scope: UntypedObject) => {
    if (extra) scope.setContext('extra', extra);
    Sentry.captureException(error);
  });
};
