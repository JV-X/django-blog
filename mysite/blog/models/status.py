
class Authority:

    READABLE = 1
    WRITEABLE = READABLE << 1
    EXECUTABLE = WRITEABLE << 1

    STATUS_CHOICES = (
        (READABLE, 'READABLE'),
        (WRITEABLE, 'WRITEABLE'),
        (EXECUTABLE, 'EXECUTABLE'),
    )


class Character:
    OWNER = 1
    MEMBER = 2
    GUEST = 3

    STATUS_CHOICES = (
        (OWNER, 'OWNER'),
        (MEMBER, 'MEMBER'),
        (GUEST, 'GUEST'),
    )
