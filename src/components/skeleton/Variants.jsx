import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
    return (
        <Stack spacing={1}>
            <Skeleton variant="rounded" width={"90%"} height={60} />
        </Stack>
    );
}