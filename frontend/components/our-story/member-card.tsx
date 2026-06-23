import Image from "next/image"

type Props = {
  name: string
  role: string
  bio?: string
  image?: string
}

export function MemberCard({ name, role, bio, image }: Props) {
  return (
    <div className="group">
      <div className="relative mb-4 h-64 overflow-hidden rounded-2xl bg-surface">
        <Image src={image || "/images/placeholder.jpg"} alt={name} fill className="object-cover group-hover:scale-105 transition-transform" />
      </div>
      <h4 className="font-heading text-sm font-semibold text-foreground">{name}</h4>
      <p className="text-xs text-foreground-muted mb-3">{role}</p>
      {bio && <p className="text-sm text-foreground-muted">{bio}</p>}
    </div>
  )
}
