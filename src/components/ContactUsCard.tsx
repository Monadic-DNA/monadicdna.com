
const ContactUsCard = ({
  title
}: {
  title: string;
}) => {
  return (
    <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-semibold text-primary">Contact Us</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {title}
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email</dt>
            <dd className="mt-1 text-sm text-primary sm:mt-0 sm:col-span-2">
              <a className="underline" href="mailto:hello@monadicdna.com">
                hello@monadicdna.com
              </a>
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Website</dt>
            <dd className="mt-1 text-sm text-primary sm:mt-0 sm:col-span-2">
              <a className="underline" href="https://monadicdna.com">
                https://monadicdna.com
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default ContactUsCard;